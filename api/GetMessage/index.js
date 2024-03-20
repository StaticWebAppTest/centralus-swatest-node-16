module.exports = async function (context, req) {
  const date = "2024-03-20T17:07:20.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

