module.exports = async function (context, req) {
  const date = "2023-02-25T11:07:45.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

