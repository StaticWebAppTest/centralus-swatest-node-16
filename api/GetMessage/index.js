module.exports = async function (context, req) {
  const date = "2023-10-27T13:10:37.334Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

