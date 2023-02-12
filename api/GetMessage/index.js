module.exports = async function (context, req) {
  const date = "2023-02-12T07:08:16.605Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

