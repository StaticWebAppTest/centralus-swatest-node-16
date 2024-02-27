module.exports = async function (context, req) {
  const date = "2024-02-27T07:10:20.193Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

