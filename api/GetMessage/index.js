module.exports = async function (context, req) {
  const date = "2022-07-02T15:10:03.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

