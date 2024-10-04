module.exports = async function (context, req) {
  const date = "2024-10-04T09:11:38.189Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

