module.exports = async function (context, req) {
  const date = "2023-07-23T13:09:57.382Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

