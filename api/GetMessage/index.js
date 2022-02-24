module.exports = async function (context, req) {
  const date = "2022-02-24T08:11:56.079Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

