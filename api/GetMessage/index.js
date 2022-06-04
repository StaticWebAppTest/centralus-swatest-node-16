module.exports = async function (context, req) {
  const date = "2022-06-04T18:11:30.098Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

