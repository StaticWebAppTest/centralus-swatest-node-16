module.exports = async function (context, req) {
  const date = "2022-05-23T18:13:30.181Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

