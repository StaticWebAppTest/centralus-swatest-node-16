module.exports = async function (context, req) {
  const date = "2025-02-11T17:11:07.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

