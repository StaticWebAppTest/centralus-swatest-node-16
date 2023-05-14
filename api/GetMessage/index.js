module.exports = async function (context, req) {
  const date = "2023-05-14T09:07:43.149Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

