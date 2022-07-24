module.exports = async function (context, req) {
  const date = "2022-07-24T21:09:40.267Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

