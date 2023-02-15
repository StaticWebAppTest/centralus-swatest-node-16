module.exports = async function (context, req) {
  const date = "2023-02-15T11:08:40.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

