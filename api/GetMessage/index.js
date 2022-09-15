module.exports = async function (context, req) {
  const date = "2022-09-15T17:19:52.820Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

