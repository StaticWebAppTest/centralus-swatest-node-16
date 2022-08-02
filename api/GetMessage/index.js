module.exports = async function (context, req) {
  const date = "2022-08-02T16:13:57.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

