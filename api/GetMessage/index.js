module.exports = async function (context, req) {
  const date = "2024-04-05T09:09:08.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

