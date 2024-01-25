module.exports = async function (context, req) {
  const date = "2024-01-25T14:09:08.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

