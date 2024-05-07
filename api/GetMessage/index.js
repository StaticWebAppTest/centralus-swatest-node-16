module.exports = async function (context, req) {
  const date = "2024-05-07T21:09:03.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

