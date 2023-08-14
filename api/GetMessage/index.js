module.exports = async function (context, req) {
  const date = "2023-08-14T07:08:36.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

