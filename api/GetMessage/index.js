module.exports = async function (context, req) {
  const date = "2022-12-02T08:12:27.774Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

