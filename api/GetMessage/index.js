module.exports = async function (context, req) {
  const date = "2024-10-21T11:11:10.799Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

