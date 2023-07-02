module.exports = async function (context, req) {
  const date = "2023-07-02T05:09:01.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

