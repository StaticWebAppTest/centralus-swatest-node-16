module.exports = async function (context, req) {
  const date = "2024-10-11T21:11:47.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

