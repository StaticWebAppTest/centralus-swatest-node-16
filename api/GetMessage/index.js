module.exports = async function (context, req) {
  const date = "2022-05-02T16:18:15.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

