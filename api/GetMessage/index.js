module.exports = async function (context, req) {
  const date = "2024-02-11T14:08:19.438Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

