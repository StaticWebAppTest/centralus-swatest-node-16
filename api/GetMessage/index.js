module.exports = async function (context, req) {
  const date = "2022-06-05T09:09:31.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

