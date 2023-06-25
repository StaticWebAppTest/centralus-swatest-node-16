module.exports = async function (context, req) {
  const date = "2023-06-25T03:06:15.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

