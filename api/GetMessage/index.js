module.exports = async function (context, req) {
  const date = "2024-03-21T10:09:22.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

