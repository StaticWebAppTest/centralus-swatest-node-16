module.exports = async function (context, req) {
  const date = "2024-08-05T11:09:47.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

