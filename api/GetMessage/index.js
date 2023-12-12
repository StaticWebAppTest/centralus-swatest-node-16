module.exports = async function (context, req) {
  const date = "2023-12-12T11:08:13.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

