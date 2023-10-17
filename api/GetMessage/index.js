module.exports = async function (context, req) {
  const date = "2023-10-17T07:08:47.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

