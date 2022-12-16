module.exports = async function (context, req) {
  const date = "2022-12-16T11:07:45.712Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

