module.exports = async function (context, req) {
  const date = "2024-05-11T21:09:08.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

