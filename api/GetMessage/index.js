module.exports = async function (context, req) {
  const date = "2022-10-02T18:15:06.332Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

