module.exports = async function (context, req) {
  const date = "2023-02-28T14:09:52.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

