module.exports = async function (context, req) {
  const date = "2022-02-25T14:09:07.763Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

