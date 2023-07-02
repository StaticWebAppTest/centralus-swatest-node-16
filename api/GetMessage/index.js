module.exports = async function (context, req) {
  const date = "2023-07-02T01:02:10.558Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

