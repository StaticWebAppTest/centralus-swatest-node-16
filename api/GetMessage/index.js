module.exports = async function (context, req) {
  const date = "2022-07-02T07:09:32.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

