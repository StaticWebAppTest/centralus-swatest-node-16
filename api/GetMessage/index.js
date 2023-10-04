module.exports = async function (context, req) {
  const date = "2023-10-04T14:08:46.941Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

