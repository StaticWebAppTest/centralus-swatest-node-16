module.exports = async function (context, req) {
  const date = "2022-12-15T00:53:18.466Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

