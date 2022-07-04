module.exports = async function (context, req) {
  const date = "2022-07-04T09:10:46.101Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

