module.exports = async function (context, req) {
  const date = "2023-02-28T10:11:18.900Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

