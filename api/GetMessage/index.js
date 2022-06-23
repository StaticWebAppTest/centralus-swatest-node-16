module.exports = async function (context, req) {
  const date = "2022-06-23T13:34:32.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

