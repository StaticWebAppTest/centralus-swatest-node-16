module.exports = async function (context, req) {
  const date = "2024-02-04T11:07:02.597Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

