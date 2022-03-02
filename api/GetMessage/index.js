module.exports = async function (context, req) {
  const date = "2022-03-02T18:19:46.975Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

