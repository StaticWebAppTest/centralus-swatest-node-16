module.exports = async function (context, req) {
  const date = "2023-05-02T06:11:53.731Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

