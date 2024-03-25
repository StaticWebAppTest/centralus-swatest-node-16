module.exports = async function (context, req) {
  const date = "2024-03-25T18:12:25.392Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

