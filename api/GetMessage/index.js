module.exports = async function (context, req) {
  const date = "2024-01-30T09:09:45.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

