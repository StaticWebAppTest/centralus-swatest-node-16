module.exports = async function (context, req) {
  const date = "2022-04-08T21:09:17.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

