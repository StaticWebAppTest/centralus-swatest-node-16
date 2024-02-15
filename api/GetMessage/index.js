module.exports = async function (context, req) {
  const date = "2024-02-15T15:09:03.874Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

