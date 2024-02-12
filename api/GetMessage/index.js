module.exports = async function (context, req) {
  const date = "2024-02-12T07:08:32.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

