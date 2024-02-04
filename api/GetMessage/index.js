module.exports = async function (context, req) {
  const date = "2024-02-04T04:10:15.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

